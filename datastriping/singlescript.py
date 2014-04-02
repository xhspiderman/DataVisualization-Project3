# This is the script for grabbing the content out of one specific website
import urllib2
from bs4 import BeautifulSoup
import pdb
import re

# opens the result file
resultFile = open("output_single.txt", "r+")
page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Homer_Simpson').read()
soup = BeautifulSoup(page)
#  get the character
character=soup.find(id='WikiaPageHeader').find('h1').string

#  get the episodes the character is in
checkDIV=soup.find_all(id=re.compile("^Appearance"))[-1]

if checkDIV:
	pdb.set_trace()
	episodesDIV=checkDIV.find_parent()
	episodesDIV=episodesDIV.find_next_sibling('table')
else:
	episodesDIV = None

if episodesDIV:
	episodes1=episodesDIV.find_all(text="Episode")
	episodes2=episodesDIV.find_all(text="THOH")
	episodes = episodes1+episodes2
	if not episodes:
		episodes=["none"]
else:
	episodes= ["none"]

# out put the result as one to one data format into result file
for episode in episodes:
	if episode!="none":
	    episode_name = episode.find_parent('i').find_next_sibling('a').string
	else:
		episode_name = episode

for episode in episodes:
		resultFile.write('"'+character.encode('UTF-8')+'"'+'   ')
		if episode!="none":
		    episode_name = episode.find_parent('i').find_next_sibling('a').string
		else:
			episode_name = episode
		resultFile.write('  "'+episode_name.encode('UTF-8')+'"')
		resultFile.write('\n')
resultFile.close()