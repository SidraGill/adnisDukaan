import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class AdminSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    Admin.createMany([
      {
        name: "admin",
        email: "admin@dukaan.com",
        phone_Number: "03009876732",
        otp: "122",
        password: "Hello2021"
      },
      {
        name: "sidra",
        email: "sidra@dukaan.com",
        phone_Number: "03009876732",
        otp: "343",
        password: "Hello2021"
      }
    ])
  }
}
