# Inspired by https://keleshev.com/my-book-writing-setup/
# Also adapted from https://github.com/cagix/pandoc-thesis

# Create directories
DIRS = build build/latex
$(shell mkdir -p $(DIRS))

##################
# Markdown files #
##################

CHAPTERS = $(wildcard chapters/*.md)

TEX_TITLEPAGE = build/latex/titlepage.tex
TEX_FILES = $(TEX_TITLEPAGE)

PANDOCFLAGS = \
	-f markdown \
	--lua-filter=build/include-files.lua \
	--metadata-file=metadata.yml \
	--include-in-header=$(TEX_TITLEPAGE)


.PHONY: all
all: build/dokumentation.pdf

build/dokumentation.pdf: main.md $(CHAPTERS) Makefile build/include-files.lua $(TEX_FILES)
	pandoc main.md $(PANDOCFLAGS) -o $@

###############
# LaTeX files #
###############

build/latex/%.tex: latex/%.tex metadata.yml
	pandoc --wrap=preserve --metadata-file=metadata.yml --template=$< -o $@ $<

######################
# Build dependencies #
######################

INCLUDE_FILES_URL = "https://raw.githubusercontent.com/pandoc/lua-filters/master/include-files/include-files.lua"

build/include-files.lua:
	curl $(INCLUDE_FILES_URL) -o build/include-files.lua

########
# Misc #
########

.PHONY: clean
clean:
	rm -rf build/

.PHONY: open
open: build/dokumentation.pdf
	open build/dokumentation.pdf

