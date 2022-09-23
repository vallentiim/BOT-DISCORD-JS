module.exports = async (client, member) => {         
    const leftChannel = client.channels.cache.find(channel => channel.id === '800198668224299029');
    return await leftChannel.send(`${member.user.username} saiu do servidor!`);
};