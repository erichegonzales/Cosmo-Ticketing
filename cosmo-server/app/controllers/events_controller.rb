class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token
    #GET
    def index
        events = Event.all
        # render json: event
        render json: events.as_json(include: [:tickets, :images])
    end
    def show
        event = event_find
        render json: event.as_json(include: [:tickets, :images])
    end    

    #POST
    def create
        event = Event.create(event_params)
        puts event.errors.full_messages
        render json: event, status: :created
         
    end

    #PATCH
    def update 
        event = event_find
        if  event
            event.update(event_params)
            render json: event
        else 
            render_not_found_error
        end
    end 

    #DELETE
    def destroy
        event = event_find
        if event
            event.destroy
        else
            render_not_found_error
        end
    end

    private

    def event_find
    event = Event.find_by(id: params[:id])
    end

    def render_not_found_error
        render json: {error: 'Event Not Found'}, status: :not_found
    end

    def event_params
        params.permit(:name, :description, :game, :seats_required, :time_start, :time_end, :ticket_price)
    end
end
