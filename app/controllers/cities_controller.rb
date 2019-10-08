class CitiesController < ApplicationController
  before_action :set_city, only: [:show, :update, :destroy]

  # GET /cities
  def index
    cities = City.order("id ASC")

    render json: cities
  end

  # GET /cities/1
  def show
    render json: @city
  end

  # POST /cities
  def create
    city = City.new(city_params)

    if city.save
      render json: city, status: :created, location: city
    else
      render json: city.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cities/1
  def update
    # byebug
    count = params[:favorite_count] || @city.favorites_count
    name = params[:name] || @city.name
    if @city.update(favorites_count: count, name: name)
      render json: @city
    else
      render json: @city.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cities/1
  def destroy
    @city.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      @city = City.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def city_params
      params.require(:city).permit(:name)
    end
end
