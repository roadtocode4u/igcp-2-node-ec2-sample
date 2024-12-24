# EC2 Commands

## NVM Installation
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```bash
nvm --version
```

## Node Installation
```bash
nvm install --lts
```

```bash
node --version
npm --version
```

## Git SSH Key Generation
```bash
ssh-keygen -vvv -t ed25519 -C "your_email@gmail.com"

chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
```

### Copy the SSH Key to GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```


```bash
nano ~/.ssh/config
```

### Add the following to the config file
```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    AddKeysToAgent yes
```

### Start the SSH Agent

```bash
eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519
```

### Test the SSH Connection

```bash
ssh -T github.com
```


### PM2 Installation
```bash
npm install pm2 -g
```
