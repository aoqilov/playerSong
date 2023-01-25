import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB+CAMAAADyU9RSAAAA3lBMVEX////7yxrxWjX3jB77zhr3ih77yQDwUCT3hx7xWDLxVi/xVjb3hQDxUyr7yRr70Bj4vbP7xQDwTjf3kh72nIz3rZ/4tan2oZHze2P6wBv0h3H1kn/yZ0jzclj6xBv3ihX2fgDwSBT98O7zdzD3oSf5uiD4mR381hX849/yYT/6zsfybE71jyf812vyYzTybzL80Ef+9d3969/5sRz83cj4nVT5q2/0hy35qhzwPwD3mgD7xT/7zzf94Zn96bP++er83on81V34mEb82nr5tIL6u5T6xaD70bf97M7936jpIMeeAAAHJ0lEQVRogb3b6XbaOBQAYJA3wAvBpG2chdWmpSWkA4GQmbTT0Cwz7/9CI9nYlq4kL4yNfvWc1v2iK10t106jcY4uvjZO1s4N1BlffDkVh0jrGFeTE3II2Z2PJ+HmB69tXJ9iCGMOg6cYQkQ12zivewjntIeMuoeQ5RAaf6t1CCFHhrDGiF5DDmfh49UpOTxnxnUNoZDDc2ZezxBKOJz2tWShjMMRtWvIwm9tqYcjWvkQZnE4KarOwkyOgJeVDmEOh7Nw/KlC7jqPw0Non1XG5faOtHFle+FNHmearjld/PnXk94Lm/50++PnHzVxrjv1vW63qzbTppP2/PPvqjnTvfMdlqLN70eIcs40HwK1K6ISsnlbNqoyDmOeuF9sH5/LgRLOnQb5WAT+LhNSIWeiXTEsAn/+P86cNjPHjAO/F+6ggDP9z2WwUh28gJxpBqW6dgB/HceZS6fwqDHe7TGcedc8SiMDWJ7D2tGtkMdwx0ayuMdwy4FMU1W1OSDNCf8o8fLH76JDdS4Q/0eqOgj8WV9RNE1R+rNdMJCI+o8SnOsLM0B11jOtpRFKIaKmtZTZWhz13Py7TDjzQaSpAx9bCmhY3InBnPWF4gSPq80db0Wtpa0FOaM/F+TcNf+wGmgSLAT7nsDLDmfMmVN+oVT9FgsMYUjXgvhnhjPhHP7BPtT2FuzgjOuf/rsAZy7gz6kOFA1qjQ30NIGXtb/HvRvAp5w+HLbhttF4yfcykz3iBEnAaYr1iv/9mwUGsOVzXkb3DhxcT1Sfn5Ih11htLWtIky04pfVb+b0w5Mwp6Jy6bnGaMnyJHlm9bfYK1ckWzIfeUnqpCDl3Bx5wBJoy3KSPrd73Caj1QTS7i/GN5JoWckswUbqCUJLGPPm+iD0YTtVzO2NxyZJwXCwHos4pyoh9dJKmBUja7pIUSz4IuKsOiSXLqTNx50bw4c2hfy0wGN2FiUiBjR9CwiGvUOcO3Oo9HcHRYfRA99S1S+Y7vtrDISTcHQj9TrIuR9z9aLR4jcjJIh49kEiqGy0eHVhgwxyX42IMc5OIU4aWFSXh/hBNuLZ07+JtzWav9piDu7gsljEXTRBrv0o5OFm6D2ZySDDQGcuxkVB3Um5FccrwYZLMFRxNlvNTDrWNm690MNmsk83LmHuPp7+1aWwTbgd+ZJc+vnaMqy8JB5OcX5zFnGK9vCQry4wZEJzoiGl250M4Elc2WrJxFy5g0X8POGp31/rsXHEAh4fw+izk4EFdOlMU655wb3DLCzk4VzgOZ+HNhHBT9gfzjuEUhR2RzzyHO3gVcmzYAzkXJvfr0RyaH8Fx54eoefmcfVkumBE3FP5lfu+M+aRxXmaqvBFuK+Lyp4ptk9LvuY0AJ0qE4ZAcT7I4kAhNwMXbLeby0hwvyPvNFh9PomVZzLFp3mTTPH15hrmcRczav4XpPbnfhNxGyIFFbE1zxjxZpDHHLdEMZ72k6/lKyoENT6WWaNv4lO55hPPBekcPXhRAuu2FM5ONULoBgdcfJJhwe6V6h+8FoE1EnHR7hS93Ptn84YE69kXrFsMteI07+h3ygD+NEQ7eR6hoWlATc/BoFBCu83jJnTUJBy+uapIKfCwbK1Es4cGvb5INQHCSJhwcvHTZFHGCJVODp/A702gL7wlhMJfwFJx0jw+mgIOn2ubAHZ+LsANnwjtTsm7yU+Ve0Dvup5W++4s4mArdONXpW0/U+P0Hnmn179zPyHL8XTmZLaN39t/zExNcX3Unq1IVcWYfXpaTQgAI55a7nDN7QV7h/dA7BDS8lMUVHIvuH18KUNg4/pOFJZzJld9Sb7SJO/i+4DVqmui9f7OxtHdc9yhvOBpuX19fNiNYdWDuyXovs4DDcoJSh+qkZaMhKDfws0R/XuVrjQ9x71wPcuHtJKMEp2lpuuqDnEGDHFoKXlao3kwGai0/KSXr+WVajnO5slgIBv0WX2XUtNYsrab0ir91Sjl4iIi9pucrSW04olp930vK0bmTX8LhtUVS+naCXb+PFdw0Uvv2HGrQcie/jJO/tFBV1Rl4AW7eoEmV2fEiUu67CKZ38Pye18q+mwQccoXVdhnmlHhPKORKeHqv6OSn20eWQ27BePZuj3pv/tFguWKvnfSnEpM/k0MmEpXrGUwvNfmzubDsntFBvffrWEzMIfdO/v61/OTP5ZBpLhwhqD+Vn/z5HO7g0udBvXnM5C/CHUD2kFX6i4oSHAbRQ5B+P3L05C/KkS9Wlosg/Dqm+A6a2c4yuVB0p4tdUODYUwmHkOTuVBdnoOo+hcvlxK8fauI6Y/7CWxvXNqr+pDCLM1DlH0zKuVq+q5dxbaOyyV+AkxQO6uE6j1V+k5nD1fndN8+Na/okWsjZRq3f7LNcZ1zzbyTQ3Al+34LiqJJx/RxTMq6bq+mLeQlX1+8DcG3y2MZxrHIHzW5fb+anGLSo/Qe+6sHNqZw/MAAAAABJRU5ErkJggg=="
        alt=""
      />
      <div className="search-box">
        <input type="text" placeholder="search" />
      </div>
      <div className="nav-icons">
        <NotificationsNoneIcon className="icon" />
        <SettingsIcon className="icon" />
        <button className="upgrade">Upgrade Plain</button>
      </div>
    </div>
  );
};

export default Navbar;
