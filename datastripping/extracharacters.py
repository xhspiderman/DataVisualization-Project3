import urllib2
from bs4 import BeautifulSoup
import pdb
import re

# opens the result file
resultFile = open("output_single.txt", "r+")
# get the 2940 urls for each characters
sources = []
my_file = open('group_cats.txt', 'r')
temp = my_file.readline()
#pdb.set_trace()
while temp:
	sources.append(temp)
	temp = my_file.readline()
my_file.close()

for source in sources:
	# opens target url or urls
	#page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Always_Comes_in_Second').read()
	page = urllib2.urlopen(source).read()
	soup = BeautifulSoup(page)
	#pdb.set_trace()
	#  get the episodes the character is in
	checkDIV = soup.find(id=re.compile("^Appearance"))
	if checkDIV:
		episodesDIV = checkDIV.find_parent("h2").find_next_sibling()
	else:
		episodesDIV = None
	
	if episodesDIV:
		episodes = episodesDIV.find_all('a')[2].text
		#episodes2 = episodesDIV.find_all(text="THOH")
		#episodes = episodes1+episodes2
		if not episodes:
			episodes = ["none"]
	else:
		episodes = ["none"]
	image = soup.body.find('table', class_='infobox').find('img')['src']
	print image
	#pdb.set_trace()
	print episodes