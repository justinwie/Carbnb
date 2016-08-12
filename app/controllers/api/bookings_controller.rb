class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.all
    if params[:user]
      @bookings = Booking.where(renter_id: params[:user].to_i)
    end
    if params[:car]
      @bookings = Booking.where(car_id: params[:car].to_i)
    end
    render json: @bookings
  end

  def create
    @booking = Booking.new(booking_params)

    @booking.start_date = DateTime.parse(booking_params[:start_date])
    @booking.end_date = DateTime.parse(booking_params[:end_date])
    @booking.renter_id = current_user.id

    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :renter_id, :car_id)
  end
end
