# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Creating stadium..."
cosmo = Stadium.create(name: "Cosmo Center", address: "212 88 Johanneshov Stockholm, Sweden", no_seats: 3)

puts "Creating events..."
pgl_stockholmn_2022 = Event.create(
    stadium_id: cosmo.id, 
    name: "PGL Stockholmn 2022", 
    description: "The first and only CS:GO Major in 2022. The prize pool will amount to $2,000,000. The competition is scheduled to take place in the capital of Sweden, Stockholm on September 3rd. The tournament will be hosted at Ericcson Globe Arena. If the safety conditions are appropriate, the organizer PGL promises to let fans watch matches right at the arena. Matches of the tournament will be broadcasted in the 4K resolution for the first time.", 
    game: "Counter-Strike Global Offensive", 
    seats_required: 3, 
    time_start: DateTime.new(2022, 9, 3, 12, 30, 0), 
    time_end: DateTime.new(2022, 9, 3, 16, 30, 0), 
    ticket_price: "420.69",
    banner: "https://isport.ua/i/25/91/09/0/2591090/image_main/3062f65e0ba34f96693569f00ef2fd46-quality_70Xresize_1Xallow_enlarge_0Xw_835Xh_0.jpg",
    image_1: "https://csgo2asia.com/wp-content/uploads/2021/10/Screenshot_154.png",
    image_2: "https://cdn.akamai.steamstatic.com/apps/csgo/images/blog/2021_stockholm_champions.png"
)

blast_premiere_2022 = Event.create(
    stadium_id: cosmo.id, name: "Blast Premiere 2022", 
    description: "BLAST Premier is the world’s leading Counter-Strike tournament series, hosting the best players and teams, offering opportunities to regions across the globe and crowning the world champions of CS:GO. Up to 32 of the best teams take part in the seven BLAST Premier events across the year with a combined prize pool of $2,475,000 on the line.", 
    game: "Counter-Strike Global Offensive", 
    seats_required: 3, 
    time_start: DateTime.new(2022, 10, 26, 16, 0, 0), 
    time_end: DateTime.new(2022, 10, 26, 22, 0, 0), 
    ticket_price: "6900.00",
    banner: "https://resources.esportsinsider.com/esportsinsider/2021/05/Fantasyexpo-x-PGL.jpg",
    image_1: "https://www.eposaudio.com/contentassets/cefd3a0e424e422e9c5dc34d3e21fb00/epos_x_premier_white_v2.jpg",
    image_2: "https://img-cdn.hltv.org/gallerypicture/nlwj5A4A2xto39jG6wMbPM.jpg?ixlib=java-2.1.0&w=1600&s=f93c4c992715e0c794fe501a224f2384"
)

tekken_world_tour_2022 = Event.create(
    stadium_id: cosmo.id, 
    name: "Tekken World Tour Qualifiers 2022", 
    description: "The TEKKEN World Tour series from Bandai Namco Entertainment Inc.along with production partner Reset Gaming brings you an international online and offline tournament series where the best compete for bragging rights in their region. The TEKKEN World Tour has 5 Offline Master Events and 13 Regional Final Events across the globe to highlight the best talent in the world! Some Regions may not have a Regional Final, in which case the top player in the leaderboard for that Region will be eligible to participate in the Global Finals. Step into the arena and see if you have what it takes!", 
    game: "TEKKEN 7", 
    seats_required: 3, 
    time_start: DateTime.new(2022, 12, 25, 20, 0, 0), 
    time_end: DateTime.new(2022, 12, 25, 24, 0, 0), 
    ticket_price: "130.99",
    banner: "https://gaminglyfe.com/wp-content/uploads/2022/06/Tekken-World-tour-2022.jpg",
    image_1: "https://pbs.twimg.com/media/DvN5cSFXQAEGnBh?format=jpg&name=900x900",
    image_2: "https://static.invenglobal.com/upload/image/2017/05/25/i1495749693212366.png"
)

puts "Creating users..."
user_1 = User.create(
    name: "Ahnaf",
    email: "ahnaf@cosmocenter.com", 
    password: "cosmo1", 
    is_admin: false)

user_2 = User.create(
    name: "Eriche",
    email: "eriche@cosmocenter.com",
    password: "cosmo2",
    is_admin: false)

user_3 = User.create(
    name: "Mark",
    email: "mark@cosmocenter.com",
    password: "cosmo3",
    is_admin: false)

user_4 = User.create(
    name: "Admin",
    email: "admin@cosmocenter.com",
    password: "cosmo0",
    is_admin: true)

puts "Creating tickets..."

ticket_1 = Ticket.create(
    user_id: user_1.id,
    event_id: pgl_stockholmn_2022.id,
)

ticket_2 = Ticket.create(
    user_id: user_1.id,
    event_id: blast_premiere_2022.id,
)

ticket_3 = Ticket.create(
    user_id: user_1.id,
    event_id: tekken_world_tour_2022.id,
)

ticket_4 = Ticket.create(
    user_id: user_2.id,
    event_id: tekken_world_tour_2022.id,
)

ticket_5 = Ticket.create(
    user_id: user_3.id,
    event_id: pgl_stockholmn_2022.id,
)

ticket_6 = Ticket.create(
    user_id: user_3.id,
    event_id: blast_premiere_2022.id,
)

puts 'Done seeding!'