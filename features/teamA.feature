Feature: Launching a url and Testing accessibilty


  Scenario Outline: As a user, I choose to launch a browser and test all accessibility on that page
    Given the user is on home page
    When I choose to launch "<url>"

    #  When I choose to launch "<url>" in browser


    Examples:
      | url                                  |
      | https://marketplace.visualstudio.com |
      | https://code.visualstudio.com/       |

