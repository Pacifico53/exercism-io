class Gigasecond
    def self.from(t)
        Time.at(t.to_i + 10**9)    #Time.at(seconds) creates date at seconds, t.to_i gives the seconds of given date, just added a gigasecond to it
    end
end
