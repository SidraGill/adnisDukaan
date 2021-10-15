#  adnis note

# ---------------App Install----------------
npm init adonis-ts-app crud

# --------------App Run----------------------
node ace serve --watch

# -------------Database connection Support----------
We also have to install the @adonisjs/lucid package for database support.

npm i @adonisjs/lucid

After installing the package, we should configure the database we're willing to use. I've chosen MySQL

node ace configure @adonisjs/lucid

after that do configurtions according to given guide by this command in .env and .env.ts


# -------------Create Models and migrations --------
Let's create a migration and model file. In adonisjs, you can perform both by a simple command.

node ace make:model Post -m 

Once the migration file is ready, let's check the migration status before we migrate.

node ace migration:status

run the migration

node ace migration:run

create just migration 
node ace make:migration users


# -----------Routes Configure------------

 configure the necessary routes on routes.ts file Like.

Route.resource('posts', 'PostsController')

# ----------Controller----------

node ace make:controller Post

create controllere with resourse methods

node ace make:controller Post -r 
 # ---------Seeder--------------

 node ace make:seeder users

runs all
node ace db:seed

run specific
node ace db:seed --files "./database/seeders/User.ts"

