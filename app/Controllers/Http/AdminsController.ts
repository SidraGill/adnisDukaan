import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Admin from 'App/Models/Admin'
import AdminCreateValidator from 'App/Validators/AdminCreateValidator';
import AdminUpdateValidator from 'App/Validators/AdminUpdateValidator';
import ImageHelper from 'App/Helpers/ImageHelper'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class AdminsController {

  private model = Admin;
  private createValidator = AdminCreateValidator
  private updateValidator = AdminUpdateValidator

  public async index({ request, response }: HttpContextContract) {
    let prm = request.all();

    let total = prm.per_page ? prm.per_page : 10;
    let page = prm.current_page ? prm.current_page : 1
    let items = await this.model.query().paginate(page, total);
    return response.ok(items);
  }

  public async store({ request, response }: HttpContextContract) {
    const payload: any = await request.validate(this.createValidator);

    let image = request.file('image')
    payload.image = ImageHelper.Upload(image, 'uploads/admin');

    // await Mail.send((message) => {
    //   message
    //     .from('sidragill298@gmail.com')
    //     .to('hoorunain2016@gmail.com')
    //     .subject('Welcome Onboard!')
    //     // .htmlView('emails/welcome', { name: 'Virk' })
    // })


    const admin = await this.model.create(payload)

    return response.ok(admin)
  }

  public async show({ params, response }: HttpContextContract) {

    const { id }: { id: Number } = params
    let admin = await this.model.findOrFail(id);
    return response.ok(admin);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id }: { id: Number } = params;
    const payload: any = await request.validate(this.updateValidator)

    const item = await this.model.findOrFail(id);
    let updt = await item.merge(payload).save()

    return response.ok(updt);
  }

  public async destroy({ params, response }: HttpContextContract) {

    const { id }: { id: Number } = params

    const ext = await this.model.findOrFail(id);
    ext.delete();

    return response.ok(ext)

  }

  public async login({ auth }) {

    const data = schema.create({
      email: schema.string({ escape: true }, [
        rules.email(),
      ]),
      password: schema.string({}, [
        rules.minLength(8)
      ])

    })

    const payload: any = await request.validate({ schema: data })

    const email = "admin@dukaan.com"
    const password = "Hello2021"

    await auth.use('api').attempt(email, password)

  }

}
