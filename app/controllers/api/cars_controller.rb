class Api::CarsController < ApplicationController
  def index
    @cars = Car.all

    if params[:user]
      @cars = Car.where(owner_id: params[:user].to_i)
    end
    render json: @cars
  end

  def create
    @car = Car.new(car_params)

    if @car.save
      render "api/cars/show"
    else
      render json: @cars.errors.full_messages, status: 422
    end
  end

  def show
    @car = Car.find(params[:id])
    render "api/cars/show"
  end

  def update
    @car = Car.find(params[:id])
    if @car.update(car_params)
      render "api/cars/show"
    else
      render json: @cars.errors.full_messages, status: 422
    end
  end

  def destroy
    @car = Car.find(params[:id])
    @car.destroy
  end

  private
  def car_params
    params.require(:car).permit(:id, :lat, :lng, :manufacturer, :model, :year, :style, :color, :price, :description, :owner_id, :image_url)
  end

end
