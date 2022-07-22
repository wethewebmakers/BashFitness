#========================================
# Scheduler Jobs
#========================================
from apscheduler.schedulers.background import BackgroundScheduler
import pytz
scheduler = BackgroundScheduler()
tz_NY = pytz.timezone('Asia/Kolkata') 
scheduler.configure(timezone=tz_NY)

# jobs
import scheduler_jobs

# scheduler.add_job(scheduler_jobs.FirstCronTest, 'interval', seconds=10)
scheduler.add_job(scheduler_jobs.FirstCronTest, 'cron', hour='09', minute='00')
scheduler.start()

#========================================