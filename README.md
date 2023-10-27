#Environment Setup 

## Requirements: 
* Ruby 2.7.4
* NodeJS (v16) and npm 
* Postgresql 

## Install NodeJs 

Install Node version 16: 
```console
$ nvm install 16
$ nvm use 16
$ nvm alias default 16
```

Upgrade npm version with: 
```console
$ npm i -g npm
```
## Install Ruby 

Install version 2.7.4: 
```console
$ rvm install 2.7.4 --default
```

Also install latest versions of bundler and rails: 
```console
$ gem install bundler
$ gem install rails
```

## Install Postgrsql 

PostgreSQL (or just Postgres for short) is an advanced database management system with more features than SQLite. If you don't already have it installed, you'll need to set it up.



Use Homebrew to install Postgres (OSX): 
```console
$ brew install postgresql
```

Once Postgres is installed, run this command to start the Postgres: 
```console
$ brew services start postgresql
```

## Built With: 
* React 
* Ruby on Rails 
* Material UI 
* Postgressql
* Firebase authentication 









Connect to Backend 
bundle install 
 rails s 

Connect to client(frontend): 
npm 


cd client 
npm install
npm start 


Progress notes: 
Controllers: 
    - Item and review controllers done with full crud 
    ?? review la