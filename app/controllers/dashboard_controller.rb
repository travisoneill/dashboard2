class DashboardController < ApplicationController

  def get_dashboard_state
    Dashboard.first
  end

  def set_dashboard_state
    Dashboard.first.update(params[:dashboard_state])
  end

  def get_dashboard_data
    render json: {
      cmrr_data: Dashboard.cmrr_data,
      recent_keywords: Dashboard.recent_keywords,
      cash_flow: Dashboard.cash_flow,
      chart_data: Dashboard.chart_data
    }
  end

end
