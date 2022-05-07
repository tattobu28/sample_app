class StaticsController < ApplicationController
  def test
    human = params[:user]
    render :json => human
  end
end