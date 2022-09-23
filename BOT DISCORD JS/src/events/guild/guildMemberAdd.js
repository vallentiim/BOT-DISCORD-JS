module.exports = async (client, member) => {         
    const guild = client.guilds.cache.get('722185645954695240');
    const role = guild.roles.cache.get('793604481362952203');
    await member.roles.add(role.id);
    const welcomeChannel = client.channels.cache.find(channel => channel.id === '800198668224299029');
    return await welcomeChannel.send(`${member.user.username} entrou no servidor!`);
};