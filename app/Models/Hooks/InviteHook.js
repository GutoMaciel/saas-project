'use strict'

const User = use('App/Models/User')

const InviteHook = exports = module.exports = {}

InviteHook.sendInvitationEmail = async (invite) => {
  const { email } = invite

  const invited = await User.findBy('email', email)

  if (invited) {
    await invited.teams().attach(invite.team_id)
  } else {
    console.log('Create account')

    // Send an email for creating a free account if the invited does not has one.
  }
}
