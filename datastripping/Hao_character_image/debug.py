import json
from pprint import pprint
import pdb
import urllib2
from bs4 import BeautifulSoup



data = json.load(json_data)

url_to_visit = 'http://simpsons.wikia.com/wiki/File:Homer_Simpson.png'
page = urllib2.urlopen(url_to_visit).read()
soup = BeautifulSoup(page)
pdb.set_trace()
soup.select(".fullImageLink")[0].find('a')['href']
# pprint(data)
json_data.close()


    