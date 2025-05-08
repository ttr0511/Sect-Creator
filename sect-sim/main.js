let year = 0;
let sect = {
  name: "Azure Dragon Sect",
  cultivators: [],
  influence: 2,
  sectLeader: "",
  outsideReputation: 0,
  spiritStones: 0,
  missions: {
    lowRisk: {
      successRate: 0.9,
      baseReward: 50,
      description: "Gathering herbs in the nearby forest"
    },
    mediumRisk: {
      successRate: 0.7,
      baseReward: 100,
      description: "Exploring ancient ruins"
    },
    highRisk: {
      successRate: 0.4,
      baseReward: 200,
      description: "Hunting powerful beasts"
    }
  },
  realmRewards: {
    "Foundation Forming": 1,
    "Meridian Awakening": 1.2,
    "Mana Baptism": 1.5,
    "Golden Core": 2,
    "Mana Tempering": 2.5,
    "Soul Channeling": 3,
    "Soul Connection": 4
  },
  messageFilters: {
    normal: true,
    important: true,
    critical: true
  }
};

let lastnamebank = [
  "Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou",
  "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Gao", "Lin", "Luo",
  "Zheng", "Liang", "Xie", "Song", "Tang", "Fang", "Deng", "Han", "Cao", "Peng",
  "Dong", "Yao", "Yu", "Pan", "Xiao", "Ren", "Cheng", "Jiang", "Qin", "Wei",
  "Hao", "Zhong", "Jin", "Fan", "Shi", "Mo", "Lu", "Tian", "Kong", "Zeng",
  "Lai", "Yin", "Yuan", "Su", "Shen", "Wan", "Feng", "Qiu", "Cui", "Guan",
  "Bai", "Pei", "Miao", "Ni", "Ji", "Liao", "Qiao", "Xiong", "Liu", "Dai",
  "An", "Yu", "Huang", "Lian", "Kang", "Yan", "Zou", "Geng", "Ding", "Qu",
  "Jiao", "Xun", "Meng", "Chai", "Mou", "Pu", "Shao", "Xiang", "Tan", "Ruan",
  "Lu", "Shi", "Fu", "Li", "Huangfu", "Zhan", "He", "Heng", "Song", "Gong"
]
let firstnamebank_f = [
  "Mei", "Li", "Xiu", "Jing", "Yan", "Fang", "Ying", "Juan", "Hui", "Ling",
  "Qin", "Lan", "Yu", "Na", "Ping", "Hong", "Xia", "Lian", "Dan", "Yun",
  "Min", "Qiao", "Fei", "Cai", "Jia", "Zhen", "Shan", "Ning", "Ting", "Rui",
  "Yue", "Xue", "Fen", "Luo", "Xuan", "Liu", "Tao", "Ming", "Huan", "Huiying",
  "Xinyi", "Yina", "Yanling", "Jinhua", "Aihua", "Qing", "Lifang", "Jie", "Shu", "Xiaoling",
  "Yumei", "Yingying", "Haixia", "Yanmei", "Lifen", "Yuqing", "Xin", "Shumin", "Lin", "Zihan",
  "Han", "Lixia", "Miaomiao", "Shuai", "Xinran", "Jiali", "Zhiying", "Haiyan", "Qi", "Nan",
  "Yingjun", "Lanhua", "Zhixin", "Rong", "Meiying", "Ru", "Shiqing", "Ziying", "Shulan", "Yanqin",
  "Aijia", "Zhuo", "Yixuan", "Ruoxi", "Chun", "Meiling", "Jiajia", "Man", "Xiaoqing", "Liqing",
  "Zhi", "Ran", "Ziyan", "Yiyang", "Shuang", "Lanlan", "Xiumei", "Huimin", "Yuxi", "Lixue"
]
let firstnamebank_m = [
  "Wei", "Ming", "Jun", "Lei", "Qiang", "Guang", "Hao", "Feng", "Bin", "Zhi",
  "Yong", "Gang", "Jie", "Chao", "Tao", "Hui", "Xiang", "Kun", "Jian", "Dong",
  "Chen", "Ping", "Bo", "Xiao", "Liang", "Shuo", "Kai", "Yi", "Yuan", "Yu",
  "Wen", "Nan", "Zhe", "Lin", "Tian", "Hai", "Jin", "Qiang", "Sheng", "Zhong",
  "Hui", "Rui", "An", "Lei", "Long", "Yi", "Qing", "Junfeng", "Hong", "Min",
  "Zhihao", "Weiyu", "Jianhua", "Fang", "Zhihong", "Lei", "Yixiao", "Xin", "Jianping", "Haifeng",
  "Mingzhe", "Jinhai", "Junhong", "Zhiyu", "Haoran", "Zicheng", "Haibo", "Zhigang", "Han", "Li",
  "Cheng", "Zhimin", "Xiaolong", "Shaoqiang", "Heming", "Shengli", "Zhiyong", "Donghai", "Shijie", "Jiyuan",
  "Jinming", "Yuanming", "Minghao", "Zhuo", "Shijun", "Hongwei", "Zhaohui", "Ziyu", "Rong", "Zhiyuan",
  "Chang", "Xiao", "Hanming", "Yusheng", "Kaiwen", "Wenzhao", "Longwei", "Xian", "Peiyuan", "Haoyu"
]
let realm_order = {
  "Foundation Forming": 1,
  "Meridian Awakening": 2,
  "Mana Baptism": 3,
  "Golden Core": 4,
  "Mana Tempering": 5,
  "Soul Channeling": 6,
  "Soul Connection": 7
}

class Cultivator {
  constructor(fullname, age, lifespan, gender, qi, realm, talent,physique) {
    this.fullname = fullname;
    this.age = age;
    this.lifespan = lifespan;
    this.gender = gender;
    this.qi = qi;
    this.realm = realm;
    this.talent = talent;
    this.physique = physique;
    this.mission = 'none';
    this.spiritStones = 0;
    let random = Math.random();
    if (random < 0.3) {
      this.missionTendencies = 'lowRisk';
    } else if (random < 0.6) {
      this.missionTendencies = 'mediumRisk';
    } else {
      this.missionTendencies = 'highRisk';
    }

  }
}

function advanceTime() {
  year++;
  log_message(`Year ${year - 1} has passed, year ${year} is upon us!`, 2);

  // Complete current missions
  completeMissions();

  // Assign new missions
  assignMissions();

  // Update sect stats
  updateSectStats();

  for (let c of sect.cultivators) {
    c.age++;

    let qiInc = 0;
    if (c.age < c.lifespan * 0.7) {
      switch (c.realm) {
        case "Foundation Forming":
          qiInc = 2;
          break;
        case "Meridian Awakening":
          qiInc = 0.5;
          break;
        case "Mana Baptism":
          qiInc = 0.1;
          break;
        case "Golden Core":
          qiInc = 0.02;
          break;
        case "Soul Channeling":
          qiInc = 0.005;
          break;
        case "Soul Connection":
          qiInc = 0.001;
          break;
        default:
          qiInc = 0;
      }
    } else {
      switch (c.realm) {
        case "Foundation Forming":
          qiInc = 1;
          break;
        case "Meridian Awakening":
          qiInc = 0.25;
          break;
        case "Mana Baptism":
          qiInc = 0.05;
          break;
        case "Golden Core":
          qiInc = 0.01;
          break;
        case "Soul Channeling":
          qiInc = 0.0025;
          break;
        case "Soul Connection":
          qiInc = 0.0005;
          break;
        default:
          qiInc = 0;
      }
    }

    c.qi += qiInc * c.talent * (Math.random() * 0.2 + 0.9);
    c.qi = Math.round(c.qi * 10000) / 10000;
  }
  // Log cultivators that advanced to a new realm
  let realmAdvancers = {};
  
  for (let c of sect.cultivators) {
    if (c.qi >= 100) {
      c.qi = 0;

      let realm2 = advanceRealm(c.realm, c.lifespan);

      // Block advancement to Foundation Forming if talent < 1
      if (c.realm === 'Foundation Forming' && realm2.realm === 'Meridian Awakening' && c.talent < 1 && Math.random() < 0.8) {

        c.qi = 75;
        log_message(`${c.fullname} failed to enter Meridian Awakening due to insufficient talent.`, 2);
      } else if (c.realm === 'Foundation Forming' && realm2.realm === 'Meridian Awakening' && c.talent < 1)  {
        c.realm = realm2.realm;
        c.lifespan = realm2.lifespan;
        if (realmAdvancers[realm2.realm] === undefined) {
          realmAdvancers[realm2.realm] = [];
        }
        realmAdvancers[realm2.realm].push(c.fullname);
      }
      else if (c.realm === 'Foundation Forming' && realm2.realm === 'Meridian Awakening') {
        c.realm = realm2.realm;
        c.lifespan = realm2.lifespan;
        if (realmAdvancers[realm2.realm] === undefined) {
          realmAdvancers[realm2.realm] = [];
        }
        realmAdvancers[realm2.realm].push(c.fullname);
      }
      if (c.realm === 'Meridian Awakening' && realm2.realm === 'Mana Baptism' && c.talent < 1.9 && Math.random() < 0.8) {
        c.qi = 75;
        log_message(`${c.fullname} failed to enter Mana Baptism due to insufficient talent.`, 2);
      } else if (c.realm === 'Meridian Awakening' && realm2.realm === 'Mana Baptism' && c.talent < 1.9) {
        c.realm = realm2.realm;
        c.lifespan = realm2.lifespan;
        if (realmAdvancers[realm2.realm] === undefined) {
          realmAdvancers[realm2.realm] = [];
        }
        realmAdvancers[realm2.realm].push(c.fullname);
      } else if (c.realm === 'Meridian Awakening' && realm2.realm === 'Mana Baptism') {
        c.realm = realm2.realm;
        c.lifespan = realm2.lifespan;
        if (realmAdvancers[realm2.realm] === undefined) {
          realmAdvancers[realm2.realm] = [];
        }
        realmAdvancers[realm2.realm].push(c.fullname);
      }
      if (c.realm === 'Mana Baptism' && realm2.realm === 'Golden Core' && c.talent < 3 && Math.random() < 0.8) {
        c.qi = 75;
        log_message(`${c.fullname} failed to enter Golden Core due to insufficient talent.`, 2);
      } else if (c.realm === 'Mana Baptism' && realm2.realm === 'Golden Core' && c.talent < 3) {
        c.realm = realm2.realm;
        c.lifespan = realm2.lifespan;
        if (realmAdvancers[realm2.realm] === undefined) {
          realmAdvancers[realm2.realm] = [];
        }
        realmAdvancers[realm2.realm].push(c.fullname);
      } else if (c.realm === 'Mana Baptism' && realm2.realm === 'Golden Core') {
        c.realm = realm2.realm;
        c.lifespan = realm2.lifespan;
        if (realmAdvancers[realm2.realm] === undefined) {
          realmAdvancers[realm2.realm] = [];
        }
        realmAdvancers[realm2.realm].push(c.fullname);
      }


    }
  }
  for (let realm in realmAdvancers) {
    if (realmAdvancers[realm].length > 0) {
      let message = `${realmAdvancers[realm].length} cultivators advanced to ${realm} this year: `;
      message += realmAdvancers[realm].join(', ');
      log_message(message, 2);
    }
  }



  

  let deadCultivators = sect.cultivators.filter(c => c.age >= c.lifespan);
  if (deadCultivators.length > 0) {
    let message = `The following cultivators died this year: `;
    message += deadCultivators.map(c => c.fullname).join(', ');
    log_message(message, 2);
  }

  sect.cultivators = sect.cultivators.filter(c => c.age < c.lifespan);

  bestCultivator = sect.cultivators.sort((a, b) => {
    let realmComp = realm_order[b.realm] - realm_order[a.realm];
    return realmComp !== 0 ? realmComp : b.qi - a.qi;
  })[0].fullname;
  if (bestCultivator !== sect.sectLeader) {
    log_message(`${bestCultivator} has become the sect leader, replacing ${sect.sectLeader}!`, 3);
    sect.sectLeader = bestCultivator;
    
  }

  // Complete current missions
  completeMissions();
    
  // Assign new missions
  assignMissions();
  
  // Update sect stats
  updateSectStats();

  render();
}

function render() {
  const sortBy = document.getElementById("sort-by")?.value || "age";
  const sortOrder = document.getElementById("sort-order")?.value || "desc";
  const displayCount = document.getElementById("display-count")?.value || "all";

  const sortedCultivators = [...sect.cultivators].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

    // Realm sorting using index
    if (sortBy === "realm") {
      const realms = [
        "Foundation Forming",
        "Meridian Awakening",
        "Mana Baptism",
        "Golden Core",
        "Mana Tempering",
        "Soul Channeling",
        "Soul Connection"
      ];
      aVal = realms.indexOf(aVal);
      bVal = realms.indexOf(bVal);
    }

    // Handle numbers and strings appropriately
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    } else {
      return sortOrder === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
  });

  const list = document.getElementById("cultivator-list");
  list.innerHTML = "";

  // Get the number of cultivators to display
  const numToDisplay = displayCount === "all" ? sortedCultivators.length : parseInt(displayCount);

  // Display only the selected number of cultivators
  for (let i = 0; i < numToDisplay; i++) {
    const c = sortedCultivators[i];
    if (!c) continue; // Skip if cultivator is undefined

    const div = document.createElement("div");
    div.className = "cultivator-card";
    let ageDisplay = c.age;
    if (["Mana Baptism", "Golden Core", "Mana Tempering", "Soul Channeling", "Soul Connection"].includes(c.realm)) {
      ageDisplay += ` / ${c.lifespan}`;
    }
    div.innerHTML = `
      <strong>${c.fullname}</strong><br>
      Age: ${ageDisplay}<br>
      Realm: ${c.realm}<br>
      Talent: ${c.talent}<br>
      Progress: ${c.qi.toFixed(1)}%
    `;
    list.appendChild(div);
  }

  // Add a message if there are more cultivators not shown
  if (numToDisplay < sortedCultivators.length) {
    const moreInfo = document.createElement("div");
    moreInfo.className = "cultivator-card";
    moreInfo.style.textAlign = "center";
    moreInfo.innerHTML = `+ ${sortedCultivators.length - numToDisplay} more cultivators not shown`;
    list.appendChild(moreInfo);
  }

  document.getElementById("sect-info").innerHTML =
    `<p>Year: ${year} — Cultivators: ${sect.cultivators.length} — Sect Leader: ${sect.sectLeader}</p>`;
}

function toggleCultivators() {
  const cultivatorList = document.getElementById('cultivator-list');
  const toggleButton = document.getElementById('toggle-cultivators');
  
  if (cultivatorList.classList.contains('hidden')) {
    cultivatorList.classList.remove('hidden');
    toggleButton.textContent = 'Hide Cultivators';
  } else {
    cultivatorList.classList.add('hidden');
    toggleButton.textContent = 'Show Cultivators';
  }
}

function generateName(gender) {
  if (gender === "Male") {
    return lastnamebank[Math.floor(Math.random() * lastnamebank.length)] + " " +
           firstnamebank_m[Math.floor(Math.random() * firstnamebank_m.length)];
  } else {
    return lastnamebank[Math.floor(Math.random() * lastnamebank.length)] + " " +
           firstnamebank_f[Math.floor(Math.random() * firstnamebank_f.length)];
  }
}

function advanceRealm(realm, lifespan) {
  const realms = [
    "Foundation Forming",
    "Meridian Awakening",
    "Mana Baptism",
    "Golden Core",
    "Mana Tempering",
    "Soul Channeling",
    "Soul Connection"
  ];
  let index = realms.indexOf(realm);
  if (realm === "Meridian Awakening") {
    lifespan += Math.floor(200 * (Math.random() * 0.2 + 0.9));
  }
  if (realm === "Mana Baptism") {
    lifespan += Math.floor(400 * (Math.random() * 0.4 + 0.8));
  }
  if (realm === "Golden Core") {
    lifespan += Math.floor(800 * (Math.random() * 0.8 + 0.6));
  }
  if (realm === "Mana Tempering") {
    lifespan += Math.floor(1500 * (Math.random() * 1.2 + 0.6));
  }
  if (realm === "Soul Channeling") {
    lifespan += Math.floor(4000 * (Math.random() * 2 + 0.4));
  }

  return {
    realm: index < realms.length - 1 ? realms[index + 1] : realm,
    lifespan
  };
}

// Search functionality
function searchSectDatabase() {
    const searchInput = document.getElementById('sect-search-input');
    const autocompleteList = document.getElementById('sect-autocomplete-list');
    const databaseContent = document.getElementById('sect-database-content');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const input = this.value.toLowerCase();
        autocompleteList.innerHTML = '';

        if (input === '') {
            databaseContent.innerHTML = '<p>No cultivator selected</p>';
            return;
        }

        const [attribute, value] = parseSearchQuery(input);
        const matches = filterCultivators(attribute, value);

        // Show autocomplete suggestions
        matches.slice(0, 10).forEach(c => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = formatSearchResult(c);
            item.onclick = () => {
                searchInput.value = formatSearchResult(c);
                autocompleteList.innerHTML = '';
                // Clear previous content before displaying new info
                databaseContent.innerHTML = '';
                displayCultivatorInfo(c);
            };
            autocompleteList.appendChild(item);
        });

        if (matches.length > 0) {
            autocompleteList.classList.add('active');
        } else {
            autocompleteList.classList.remove('active');
            databaseContent.innerHTML = '<p>No matches found</p>';
        }
    });

    // Hide autocomplete when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !autocompleteList.contains(e.target)) {
            autocompleteList.classList.remove('active');
        }
    });
}

function parseSearchQuery(input) {
    // Remove any whitespace around colons
    input = input.replace(/\s*:\s*/g, ':');
    
    // Try to match attribute:value pattern
    const regex = /([a-zA-Z]+):\s*(.*)/;
    const match = input.match(regex);

    if (match) {
        const attribute = match[1].toLowerCase();
        const value = match[2].trim().toLowerCase();
        
        // Handle special cases for attribute names
        if (attribute === 'age' || attribute === 'talent' || attribute === 'qi' || attribute === 'lifespan') {
            // Handle number comparisons
            if (value.startsWith('>')) {
                return [attribute, { type: 'gt', value: parseFloat(value.substring(1)) }];
            } else if (value.startsWith('<')) {
                return [attribute, { type: 'lt', value: parseFloat(value.substring(1)) }];
            } else {
                return [attribute, { type: 'eq', value: parseFloat(value) }];
            }
        } else if (attribute === 'realm') {
            // Handle realm names case-insensitively
            return [attribute, { type: 'eq', value: value }];
        } else if (attribute === 'gender') {
            // Handle gender case-insensitively
            return [attribute, { type: 'eq', value: value }];
        }
    }
    
    // If no attribute:value pattern found, treat as full text search
    return [null, input.toLowerCase()];
}

function filterCultivators(attribute, value) {
    let matches = [];
    
    if (attribute) {
        matches = sect.cultivators.filter(c => {
            let attrValue = c[attribute];
            if (attrValue !== undefined) {
                // Handle different value types
                if (typeof attrValue === 'number') {
                    if (value.type === 'gt') {
                        return attrValue > value.value;
                    } else if (value.type === 'lt') {
                        return attrValue < value.value;
                    } else {
                        return attrValue === value.value;
                    }
                } else if (typeof attrValue === 'string') {
                    return attrValue.toLowerCase().includes(value.value);
                }
            }
            return false;
        });
    } else {
        // Full text search across multiple fields
        matches = sect.cultivators.filter(c => 
            c.fullname.toLowerCase().includes(value) ||
            c.realm.toLowerCase().includes(value) ||
            c.gender.toLowerCase().includes(value) ||
            c.physique.toLowerCase().includes(value) ||
            c.mission.toLowerCase().includes(value)
        );
    }
    
    return matches;
}

function formatSearchResult(cultivator) {
    return `${cultivator.fullname} - ${cultivator.realm} (${cultivator.age} years)`;
}

function displayCultivatorInfo(cultivator) {
    const content = `
        <div class="cultivator-info">
            <h3>${cultivator.fullname}</h3>
            <div class="cultivator-stats">
                <div class="stat-group">
                    <p><strong>Age:</strong> ${cultivator.age} years</p>
                    <p><strong>Lifespan:</strong> ${cultivator.lifespan} years</p>
                </div>
                <div class="stat-group">
                    <p><strong>Realm:</strong> ${cultivator.realm}</p>
                    <p><strong>Qi:</strong> ${cultivator.qi}</p>
                </div>
                <div class="stat-group">
                    <p><strong>Talent:</strong> ${cultivator.talent}</p>
                    <p><strong>Gender:</strong> ${cultivator.gender}</p>
                </div>
                <div class="stat-group">
                    <p><strong>Physique:</strong> ${cultivator.physique}</p>
                    <p><strong>Mission:</strong> ${cultivator.mission}</p>
                </div>
                <div class="stat-group">
                    <p><strong>Spirit Stones:</strong> ${cultivator.spiritStones}</p>
                </div>
            </div>
        </div>
    `;
    const databaseContent = document.getElementById('sect-database-content');
    databaseContent.innerHTML = content;
}

// Sect Management Functions

function toggleSectRecruitmentMenu() {
    const sectManagementContent = document.getElementById('recruitment-section');
    const toggleButton = document.getElementById('sect-recruitment-btn');

    if (sectManagementContent.style.display === 'none') {
      sectManagementContent.style.display = 'block';
      toggleButton.textContent = 'Hide Sect Recruitment';
    } else {
      sectManagementContent.style.display = 'none';
      toggleButton.textContent = 'Show Sect Recruitment';
    }
}

function recruitDisciple(type) {
    const spiritStones = parseInt(document.getElementById('sect-spirit-stones').textContent);
    let successChance = 0;
    let cost = 0;
    let talentMultiplier = 1;

    // Set parameters based on disciple type
    if (type === 'Foundation') {
        cost = 100;
        successChance = sect.influence * 10; // 20% base chance with influence 2
        talentMultiplier = 1;
    } else if (type === 'Talented') {
        cost = 500;
        successChance = sect.outsideReputation * 2; // 0% base chance with reputation 0
        talentMultiplier = 2;
    }

    // Check if we have enough spirit stones
    if (spiritStones < cost) {
        log_message("Not enough spirit stones!", 2);
        return;
    }

    // Try to recruit
    const success = Math.random() * 100 < successChance;
    if (success) {
        // Generate new disciple
        const age = Math.floor(Math.random() * 20 + 15);
        const lifespan = Math.floor(Math.random() * 50 + 100);
        const gender = Math.floor(Math.random() * 2) ? "Male" : "Female";
        const talent = Math.round(100 * generate_talent_level(sect.influence) * talentMultiplier) / 100;
        
        sect.cultivators.push(new Cultivator(
            generateName(gender),
            age,
            lifespan,
            gender,
            0,
            "Foundation Forming",
            talent,
            'none'
        ));

        sect.spiritStones -= cost;
        updateSectStats();
        render();
        log_message(`Successfully recruited ${type} Disciple!`, 2);
    } else {
        sect.spiritStones -= cost;
        updateSectStats();
        log_message(`Failed to recruit ${type} Disciple.`, 1);
    }
}

function updateSectStats() {
    document.getElementById('sect-influence').textContent = sect.influence;
    document.getElementById('sect-reputation').textContent = sect.outsideReputation;
    document.getElementById('sect-spirit-stones').textContent = sect.spiritStones;
}

// Initialize message filters
function initializeMessageFilters() {
  document.getElementById('message-filter-1').addEventListener('change', (e) => {
    sect.messageFilters.normal = e.target.checked;
    updateLog();
  });
  document.getElementById('message-filter-2').addEventListener('change', (e) => {
    sect.messageFilters.important = e.target.checked;
    updateLog();
  });
  document.getElementById('message-filter-3').addEventListener('change', (e) => {
    sect.messageFilters.critical = e.target.checked;
    updateLog();
  });
}

// Modified log_message function
function log_message(message, importance) {
  let log_content = document.getElementById("log-content");
  let log_message = document.createElement("div");
  log_message.innerHTML = message;
  
  // Set message color based on importance
  if (importance === 1) {
    log_message.style.color = "white";
  } else if (importance === 2) {
    log_message.style.color = "orange";
  } else if (importance === 3) {
    log_message.style.color = "red";
  }
  
  // Store importance level
  log_message.dataset.importance = importance;
  
  log_content.appendChild(log_message);
  log_content.scrollTop = log_content.scrollHeight;
  
  // Manage log messages
  manageLogMessages();
}

// Function to manage log messages
function manageLogMessages() {
  const logContent = document.getElementById('log-content');
  const messages = logContent.children;
  
  if (messages.length > 1000) {
    // Remove 500 oldest messages
    for (let i = 0; i < 500; i++) {
      if (messages.length > 0) {
        logContent.removeChild(messages[0]);
      }
    }
  }
}

// Function to update log based on filters
function updateLog() {
  const logContent = document.getElementById('log-content');
  const messages = logContent.children;
  
  for (let message of messages) {
    const importance = parseInt(message.dataset.importance);
    let visible = false;
    
    switch(importance) {
      case 1: visible = sect.messageFilters.normal; break;
      case 2: visible = sect.messageFilters.important; break;
      case 3: visible = sect.messageFilters.critical; break;
    }
    
    message.style.display = visible ? 'block' : 'none';
  }
}

// Initialize everything when the page loads
window.onload = function() {
    searchSectDatabase();
    
    // Initialize sect stats
    sect.spiritStones = 1000;
    updateSectStats();
    
    // Initialize cultivators
    for (let i = 0; i < 5; i++) {
      recruitDisciple('Foundation');
    }
    
    // Create sect leader
    const leader = new Cultivator(
        generateName("Male"),
        Math.floor(Math.random() * 100 + 100),
        Math.floor(Math.random() * 50 + 300),
        "Male",
        Math.floor(Math.random() * 50),
        "Mana Baptism",
        Math.round(100 * (4 * (Math.random() + 0.5))) / 100,
        'none'
    );
    sect.cultivators.push(leader);
    sect.sectLeader = leader.fullname;
    
    // Initialize message filters
    initializeMessageFilters();
    
    render();
};

function generate_talent_level(influence) {
  let u1 = Math.random();
  let u2 = Math.random();
  let normal = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

  let logTalent = normal * 0.35 + 0;
  let talent_level = Math.exp(logTalent);

  let scale_factor = 10.0 / 5.36;
  talent_level *= scale_factor;
  if (talent_level < 1.5 && Math.random() < 0.5) {
    talent_level = 0.1 + Math.random() * (0.99 - 0.1);

  }
  if (influence) {
    talent_level = Math.min(talent_level, influence);
  }

  return talent_level;
}

function assignMissions() {
  sect.cultivators.forEach(cultivator => {
      if (cultivator.mission === 'none') {
          // Assign mission based on cultivator's tendencies
          const missionType = cultivator.missionTendencies;
          const mission = sect.missions[missionType];
          cultivator.mission = {
              type: missionType,
              description: mission.description,
              successRate: mission.successRate,
              baseReward: mission.baseReward
          };
      }
  });
}

function calculateMissionReward(cultivator) {
  // Base reward based on mission type
  let reward = cultivator.mission.baseReward;
  
  // Multiply by realm modifier
  reward *= sect.realmRewards[cultivator.realm];
  
  // Add bonus based on qi
  reward += Math.floor(cultivator.qi * 0.1);
  
  // Add small random variation
  reward = Math.floor(reward * (0.8 + Math.random() * 0.4));
  
  return reward;
}

function completeMissions() {
  sect.cultivators.forEach(cultivator => {
      if (cultivator.mission !== 'none') {
          // Calculate success chance
          const successChance = cultivator.mission.successRate;
          const success = Math.random() < successChance;
          
          if (success) {
              // Calculate reward
              const reward = calculateMissionReward(cultivator);
              
              // Distribute rewards
              cultivator.spiritStones += reward;
              sect.spiritStones += Math.floor(reward * 0.2); // Sect gets 20% of the reward
              
              // Log the success
              log_message(`${cultivator.fullname} successfully completed their mission and gained ${reward} spirit stones!`, 1);
          } else {
              // Log the failure
              log_message(`${cultivator.fullname} failed their mission.`, 1);
          }
          
          // Reset mission
          cultivator.mission = 'none';
      }
  });
}