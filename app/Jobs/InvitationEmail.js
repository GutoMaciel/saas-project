'use strict'

const Mail = use('Mail')

class InvitationEmail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'InvitationEmail-job'
  }

  async handle ({ user, team, email }) {
    await Mail.send(
      ['emails.invitation'],
      { team: team.name, user: user.name },
      message => {
        message
          .to(email)
          .from('gustavo@saas.com', 'Gustavo | SaaS')
          .subject(`We want You at ${team.name}`)
      }
    )
  }
}

module.exports = InvitationEmail
