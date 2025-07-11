import network from "@system.network";

class Network{
    NetworkCheck() {
        return new Promise((resolve) => {
            network.getType({
                success: function (data) {
                    if (!data.type || data.type === 'none') {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                },
                fail: function () {
                    resolve(false);
                }
            });
        });
    }
}