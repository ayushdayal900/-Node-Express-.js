const os = require('os')
const user = os.userInfo()


console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds.`)

currentOs = {
    name : os.type(),
    release : os.release(),
    platform : os.platform(),
    arch : os.arch(),
    cpu: os.cpus(),
    network: os.networkInterfaces(),
    homeDir: os.homedir(),
    tmpDir: os.tmpdir(),
    uptime: os.uptime(),
    freeMem: os.freemem(),
    totalMem: os.totalmem()
}
console.log(currentOs)