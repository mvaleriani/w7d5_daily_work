class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])

    if @user
      login!(@user)
      # redirect_to api_user_url(@user)
      render "api/users/show"
    else
      render :json ["Invalid Credentials"], status:401
    end
  end

  def destroy
    unless current_user
      render :json ['No Ones Home'], status:400
    end
    logout!
    redirect_to new_api_session_url
  end

  def new
  end
end
