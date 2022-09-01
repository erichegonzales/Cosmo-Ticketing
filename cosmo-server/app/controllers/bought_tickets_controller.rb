class BoughtTicketsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
     def index
        bought_tickets = BoughtTicket.all
        # render json: event
        render json: bought_tickets
    end

    #POST
    def create
        bought_ticket = BoughtTicket.create(ticket_params)
        puts bought_ticket.errors.full_messages
        render json: bought_ticket, status: :created
    end

    private

      def ticket_params
        params.permit(:user_id, :banner, :name, :game, :ticket_price, :time_start, :time_end)
    end
end
