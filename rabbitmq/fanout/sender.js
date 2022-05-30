

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = 'logs';
        var msg = process.argv.slice(2).join(' ') || 'Hi World!';

        channel.assertExchange(exchange, 'fanout', {    
            durable: false                               //The messages will be lost if no queue is bound to the exchange 
        });
        channel.publish(exchange, '', Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    
    });

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});