class Relationship < ActiveRecord::Base
  # don't have to give class_name or foreign_key b/c ActiveRecord reflection works here
  belongs_to :country
  # make sure to give class_name and foreign_key b/c ActiveRecord doesn't know what friend is
  belongs_to :friend, :class_name => "Country", :foreign_key => "friend_id"
end
