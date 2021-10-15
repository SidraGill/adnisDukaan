import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer';
import CustomerCreateValidator from 'App/Validators/CustomerCreateValidator';
import CustomerUpdateValidator from 'App/Validators/CustomerUpdateValidator';

export default class CustomersController {

  private model = Customer;
  private createValidator = CustomerCreateValidator
  private updateValidator = CustomerUpdateValidator

  public async index({ request, response }: HttpContextContract) {
    let prm = request.all();
    let total = prm.per_page ? prm.per_page : 10;
    let page = prm.current_page ? prm.current_page : 1

    let items = await this.model.query().paginate(page, total);
    return response.ok(items);
  }

  public async store({ request, response }: HttpContextContract) {

    const payload: any = await request.validate(this.createValidator);
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
