class Event < ApplicationRecord
    belongs_to :stadium, optional: true
    has_many :tickets
    has_many :images
    has_many :users, through: :tickets
end
