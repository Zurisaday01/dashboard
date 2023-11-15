module.exports = {
    apps: [{
      script: 'npm start'
    }],
  
    deploy: {
      production: {
        key: 'key-server.pem',
        user: 'ubuntu',
        host: '18.144.163.200',
        ref: 'origin/main',
        repo: 'https://github.com/Zurisaday01/dashboard',
        path: '/home/ubuntu',
        'pre-deploy-local': '',
        'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
        'pre-setup': '',
        'ssh_options': 'ForwardAgent=yes'
      }
    }
  };