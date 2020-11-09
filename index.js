const core = require('@actions/core')
const {exec} = require('@actions/exec')
const path = require('path')

try {
    var options = {
        env: {
            'PAYLOAD_PATH' : __dirname
        }
    }
//    core.exportVariable('LD_LIBRARY_PATH', 'mesa-18.2.3/usr/local/lib/x86_64-linux-gnu')
//    core.exportVariable('GALLIUM_DRIVER', 'swr')
    exec(path.join(__dirname, "setup-opengl.sh"), [], options)

} catch(error) {
    core.setFailed(error.message)
}
