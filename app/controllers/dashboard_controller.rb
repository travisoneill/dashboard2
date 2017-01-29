class DashboardController < ApplicationController

  def get_dashboard_state
    render json: Dashboard.state
  end

  def set_dashboard_state
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
    params.require(:dashboardState).permit(:goals, :fucked, :lastFucked)
  end

end
