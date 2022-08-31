class ImagesController < ApplicationController

    def show_image
    
        render json: Image.all
    end
end
