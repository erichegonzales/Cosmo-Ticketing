class EventsController < ApplicationController
    def index
        event = Event.all
        render json: event
    end
end
