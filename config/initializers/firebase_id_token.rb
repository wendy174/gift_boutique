# config for FirebaseIDtoken gem (used to verify tokens that firebases issues when suer signs in to your app)

FirebaseIdToken.configure do |config|
    config.redis = Redis.new # Or use your existing Redis instance
    config.project_ids = [ENV['FIREBASE_PROJECT_ID']]
  end