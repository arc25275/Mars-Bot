const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class Support extends Command {
  constructor(client) {
    super(client, {
      name: 'support',
      group: 'util',
      memberName: 'support',
      description: 'Get Help',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities
    })
  }
  run(message) {
    count.cmdRun(this.name, this.group, message)
    let info = mission.other.support

    message.embed({
      title: info.title,
      url: config.invite,
      description: info.info + config.invite,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
      footer: { text: mission.credit }
    })
  }
}
