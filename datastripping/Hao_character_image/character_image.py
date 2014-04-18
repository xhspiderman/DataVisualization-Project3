import json
from pprint import pprint
import pdb
import urllib2
import urllib
from bs4 import BeautifulSoup
import re
import string


# with open('data', 'r+') as f:
# 	data = json.load(f)
#     data['cool'] = "cool" # <--- add `id` value.


with open('data', 'r+') as f:
	data = json.load(f)
	count = 0
	for dat in data:
		count=count+1
		print str(count/18)+"%"
		try:
			url_to_visit ='http://simpsons.wikia.com/wiki/'+dat["image"]
			url_to_visit=string.replace(url_to_visit,' ','_')
			print "url is:"
			print url_to_visit
			page = urllib2.urlopen(url_to_visit).read()
			soup = BeautifulSoup(page)
			temp = soup.select(".fullImageLink")[0].find('a')['href']
			dat["thumbURL"]=temp
			print "image link is:"
			print  temp
		except:
			dat["thumbURL"] = "noURL"
			print "wronglink"
	f.seek(0)        # <--- should reset file position to the beginning.
	json.dump(data, f, indent=4)

# pdb.set_trace()
# json_data.close()