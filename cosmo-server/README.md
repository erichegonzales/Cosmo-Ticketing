# README
## Database tables/models (M)
Stadium
    has_many :events
    - stadium_id:integer
    - name
    - address
    - no_seats
Event
    belongs_to :stadium
    has_many :tickets
    - event_id:integer
    - stadium_id:integer
    - name
    - description
    - game
    - seats_required :integer
    - time_start:datetime
    - time_end:datetime
Ticket
    belongs_to :event
    belongs_to :user
    - ticket_id:integer
    - user_id:integer
    - event_id:integer
    - available:boolean
User
    has_many :tickets
    - user_id:integer
    - email
    - password
    - is_admin:boolean

## Model Methods
stadia => Stadium.all
stadia.events => [list of events]
event.tickets => [list of tickets]
ticket.user => User
ticket.event => Event
user.tickets => [list of tickets]

## Controllers (C)
Stadia
Events
Tickets
Users

## View - ReactJS (V)
exists in the '/cosmo-client folder