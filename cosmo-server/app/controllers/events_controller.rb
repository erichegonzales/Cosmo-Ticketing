class EventsController < ApplicationController
    def index
        event = Event.all
        render json: event
    end
    def show
        event= Event.find_by(id: params[:id])
        render json: event
    end
end
