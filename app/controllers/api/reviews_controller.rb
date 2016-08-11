class Api::CarsController < ApplicationController

  def create
    @review = Review.new(review_params)

    @review.rating = review_params[:rating].to_i
    @review.user_id = current_user.id

    if @review.save
      @car = @review.car
      render 'api/cars/show'
    else
      render json: review, status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:rating, :description, :car_id, :user_id)
  end
end
