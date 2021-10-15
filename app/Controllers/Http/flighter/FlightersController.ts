import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Flighter from 'App/Models/Flighter';
import FlighterCreateValidator from 'App/Validators/FlighterCreateValidator';
import FlighterUpdateValidator from 'App/Validators/FlighterUpdateValidator';
import ImageHelper from 'App/Helpers/ImageHelper';

export default class FlightersController {

  private model = Flighter;
  private createValidator = FlighterCreateValidator
  private updateValidator = FlighterUpdateValidator

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
}