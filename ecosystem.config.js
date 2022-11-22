//https://pm2.keymetrics.io
module.exports = {
  apps: [
    {
      name: 'dvtop',
      exec_mode: 'cluster',
      instances: '2', //max表示根据主机CPU核数决定实例数量
      script: './.output/server/index.mjs',
      env: {
          "PORT": 8589
      },
    }
  ]
}
