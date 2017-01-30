class DashboardController < ApplicationController

  def get_dashboard_state
    render json: Dashboard.state
  end

  def set_dashboard_state
    # byebug
    timestamp = params[:dashboardState][:last_fucked]
    if timestamp
      params[:dashboardState][:last_fucked] = Integer(timestamp) / 1000
    end
    Dashboard.first.update(dashboard_params)
    render json: Dashboard.state
  end

  def get_dashboard_data
    render json: {
      cmrr_data: Dashboard.cmrr_data,
      recent_keywords: Dashboard.recent_keywords,
      cash_flow: Dashboard.cash_flow,
      chart_data: Dashboard.chart_data
    }
  end

  private

  def dashboard_params
    params.require(:dashboardState).permit(:goals, :fucked, :last_fucked)
  end

end
