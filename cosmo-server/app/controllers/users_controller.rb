class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    # private

    # def user_find
    #     user = User.find_by!(id: params[:id])
    # end

    # def render_not_found_error
    #     render json: {error: 'User Not Found'}, status: :not_found
    # end

    # def event_params
    #     params.permit(:email, :password, :is_admin)
    # end
end
