Rails.application.routes.draw do
  root "static_pages#root"

  # API routes for dashboard data
  get '/dashboard/data', to: 'dashboard#get_dashboard_data'
  get '/dashboard/cmrrdata', to: 'dashboard#get_cmrr_data'
  get '/dashboard/recentkeywords', to: 'dashboard#get_recent_keywords'
  get '/dashboard/cashflow', to: 'dashboard#get_cash_flow'
  get '/dashboard/chartdata', to: 'dashboard#get_chart_data'

  # get/set dashboard state
  get '/dashboard/state', to: 'dashboard#get_dashboard_state'
  post '/dashboard/state', to: 'dashboard#set_dashboard_state'

end
