'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Gustavo Maciel',
      email: 'gustavo@digitaltork.com',
      password: '244466666'
    })

    await user.teams().create({
      name: 'Tork',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
