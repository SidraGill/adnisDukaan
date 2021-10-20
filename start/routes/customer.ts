
import Route from '@ioc:Adonis/Core/Route'

Route.resource('customer', 'customer/CustomersController').apiOnly()

Route.resource('order', 'customer/OrdersController').apiOnly()
