class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, :fname, :lname, presence: true
  validates :email, uniqueness: true
  validates :password, length:{minimum: 6}, allow_nil: :true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :cars,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'Car'

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
