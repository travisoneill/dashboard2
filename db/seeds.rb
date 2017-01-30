# Seed DB with initial dashboard state
Dashboard.create({
  fucked: true,
  last_fucked: Time.now.getutc.to_i,
  goals: '00000000000000000000'
})
