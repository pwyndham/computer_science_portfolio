from appium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions as EC
from appium.options.android import UiAutomator2Options
from selenium.common.exceptions import TimeoutException
import time
import os

# setup
options = UiAutomator2Options()
options.platform_name = "Android"
options.device_name = "emulator-5554"
options.automation_name = "UiAutomator2"
options.app_package = "org.fossify.calendar"
options.app_activity = ".activities.MainActivity"
options.no_reset = True

driver = webdriver.Remote("http://localhost:4723", options=options)
wait = WebDriverWait(driver, 30)

# screenshot
def screenshot(name):
    os.makedirs("Screenshots", exist_ok=True)
    filename = f"Screenshots/{name}.png"
    driver.save_screenshot(filename)
    print(f"Saved: {filename}")

try:
    driver.activate_app("org.fossify.calendar")

    time.sleep(2)
    screenshot("MainActivityScreenshot")
    time.sleep(2)
    #driver.start_activity("org.fossify.calendar", ".activities.MainActivity")

    #settings to change events time zone change to on

    #More options button
    # more_options_btn = wait.until(EC.element_to_be_clickable((AppiumBy.ACCESSIBILITY_ID, "More options")))
    # more_options_btn.click()
    # time.sleep(1)


    #settings in opt
    settings_btn = wait.until(EC.element_to_be_clickable((By.ID, "org.fossify.calendar:id/settings")))
    settings_btn.click()

    time.sleep(1)
    screenshot("SettingsScreenshot")
    # Scroll until the time zone setting is visible
    settings_time_zone_btn = driver.find_element(
        "-android uiautomator",
        'new UiScrollable(new UiSelector().scrollable(true))'
        '.scrollIntoView(new UiSelector().resourceId("org.fossify.calendar:id/settings_allow_changing_time_zones"))'
    )
    if settings_time_zone_btn.get_attribute("checked") == "false":
        settings_time_zone_btn.click()
        print("Enabled 'Allow Changing Time Zones'")
    else:
        print("'Allow Changing Time Zones' already enabled")
    # Click it once visible
    time.sleep(1)
    
    #settings screenshot

    #manage event types
    manage_event_types_btn = driver.find_element(
        "-android uiautomator",
        'new UiScrollable(new UiSelector().scrollable(true))'
        '.scrollIntoView(new UiSelector().text("Manage event types"))'
    )
    # Sometimes need a small wait
    time.sleep(1)
    manage_event_types_btn.click()

    time.sleep(2)
    screenshot("ManageEventTypesActivityScreenshot")
    time.sleep(2)
    #managa event change / screenshot
    #Go back to Settings
    driver.back()
    time.sleep(2)

    #Go back to Main
    driver.back()
    time.sleep(2)

    #fab menu first
    main_fab = wait.until(EC.element_to_be_clickable((By.ID, "org.fossify.calendar:id/calendar_fab")))
    main_fab.click()
    time.sleep(2)
    
    # create event
    fab = wait.until(EC.element_to_be_clickable((By.ID, "org.fossify.calendar:id/calendar_fab")))
    fab.click()
    time.sleep(2)

    # stylus required
    try:
        stylus_popup = WebDriverWait(driver, 2).until(
            EC.presence_of_element_located((
                "-android uiautomator",
                'new UiSelector().textContains("stylus")'
            ))
        )
        print("Stylus popup detected going back")
        driver.back()
        time.sleep(1)

    except TimeoutException:
        print("No stylus popup detected continuing normally")

    # wait for title input
    title_input = wait.until(
        EC.presence_of_element_located((By.ID, "org.fossify.calendar:id/event_title"))
    )
    title_input.clear()
    title_input.send_keys("MainActivity Meeting")

   # location
    location_input = wait.until(
        EC.presence_of_element_located((By.ID, "org.fossify.calendar:id/event_location"))
    )
    location_input.clear()
    location_input.send_keys("MainActivity Meeting Room")

    # description
    desc_input = wait.until(
        EC.presence_of_element_located((By.ID, "org.fossify.calendar:id/event_description"))
    )
    desc_input.clear()
    desc_input.send_keys("MainActivity Milestones Discussion")

    # time zone
    time_zone = wait.until(
        EC.presence_of_element_located((By.ID, "org.fossify.calendar:id/event_time_zone"))
    )
    time_zone.click()
    time.sleep(2)

    #change time zone
    costa_rica_option = wait.until(
        EC.element_to_be_clickable((
            "-android uiautomator",
            'new UiSelector().text("America/Costa_Rica")'
        ))
    )
    screenshot("SelectTimeZoneActivityScreenshot")
    costa_rica_option.click()
    time.sleep(2)
    
    screenshot("EventActivityScreenshot")
    time.sleep(2)
    #screenshot("01_MainActivity_Event")

    # click save
    save_btn = wait.until(EC.element_to_be_clickable((By.ID, "org.fossify.calendar:id/save")))
    save_btn.click()

    # wait.until(lambda d: d.current_activity.endswith("EventActivity"))
    # screenshot("02_EventActivity")

    #reminder required
    try:
        reminder_text = WebDriverWait(driver, 2).until(
            EC.presence_of_element_located((
                "-android uiautomator",
                'new UiSelector().textContains("remind")'
            ))
        )
        print("Reminder detected — dismissing once")
        driver.back()
        time.sleep(1)
        reminder_handled = True

    except:
        print("No reminder shown")

    #permission required

    try:
        grant_btn = WebDriverWait(driver, 3).until(
            EC.element_to_be_clickable((By.ID, "android:id/button1"))
        )
        grant_btn.click()
        print("Grant permission allowed")
        driver.back()
        time.sleep()
    except:
        print("No permission dialog shown")

    time.sleep(2)

    # notification allow
    try:
        allow_btn = WebDriverWait(driver, 3).until(
            EC.element_to_be_clickable((By.ID, "com.android.permissioncontroller:id/permission_allow_button"))
        )
        allow_btn.click()
        print("Notification permission allowed")
        driver.back()
        time.sleep(2)
    except:
        print("No notification permission dialog shown, skipping")
    time.sleep(2)

    #plus sign first
    main_fab = wait.until(EC.element_to_be_clickable((By.ID, "org.fossify.calendar:id/calendar_fab")))
    main_fab.click()
    time.sleep(2)

    # create task
    fab = wait.until(EC.element_to_be_clickable((By.ID, "org.fossify.calendar:id/fab_task_icon")))
    fab.click()
    time.sleep(2)
    print(driver.current_activity)

    # wait for title input
    title_input = wait.until(
        EC.presence_of_element_located((By.ID, "org.fossify.calendar:id/task_title"))
    )
    title_input.clear()
    title_input.send_keys("MainActivity Meeting Task")

    # description
    desc_input = wait.until(
        EC.presence_of_element_located((By.ID, "org.fossify.calendar:id/task_description"))
    )
    desc_input.clear()
    desc_input.send_keys("MainActivity Milestones Discussion Task")

    wait.until(lambda d: d.current_activity.endswith("TaskActivity"))
    screenshot("TaskActivityScreenshot")
    time.sleep(2)

    # click save
    save_btn = driver.find_element(By.ID, "org.fossify.calendar:id/save")
    save_btn.click()

    # notification allow
    try:
        allow_btn = WebDriverWait(driver, 3).until(
            EC.element_to_be_clickable((By.ID, "com.android.permissioncontroller:id/permission_allow_button"))
        )
        allow_btn.click()
        print("Notification permission allowed")
        driver.back()
        time.sleep(2)
    except:
        print("No notification permission dialog shown, skipping")
    time.sleep(2)



finally:
    driver.quit()
